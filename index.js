const express = require("express")
const cors = require("cors")
const fetch = require("node-fetch")

const app = express()
const port = 3001

app.use(cors())
app.use(express.static("docs"))

app.get("/ping", (req, res) => {
  res.send("pong")
})

const fetchUsers = async (userList) => {
  let options = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAM9qlAEAAAAAxWm8TUcXFxIlDNxGMsmwKsESbPU%3D3Jle5yAVKvSD0MS9QgRRpXGf9CYpn5pChjmYELa2a5FfuHSAjL",
    },
  }

  const users = await Promise.all(userList.map((user) => fetch(`https://api.twitter.com/2/users/by/username/${user}?user.fields=profile_image_url,url`, options)))
    .then((response) => {
      return Promise.all(response.map((resp) => resp.json()))
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })

  return users
}

app.get("/collabs", async (req, res) => {
  const users = ["SaanhoiClub", "GoatSquadNFT", "D_CryptoFamily"]
  const collabs = await fetchUsers(users)

  res.status(200).json({ message: "collabs", collabs })
})

app.get("/hosts", async (req, res) => {
  const users = [
    "SteveRyanOnline",
    "SkurpySocial",
    "KoKid951",
    "doodlegenics",
    "Famous_Dyl",
    "s0meone_U_Know",
    "TheVoiceOfCash",
    // "Wedripz.eth",
    "GorillaMansion",
    "DDish123",
    "PuffPandas",
    "LegendQueenWeb3",
    "stukwan",
    "EnvelopeCityInk",
    "StrokeDriven",
    "JuicyXBrat",
    // "BTBD_ImDiDi",
    "AunySIllyMe",
    "Cheeeebz",
    "ZongKia",
  ]
  const hosts = await fetchUsers(users)

  res.status(200).json({ message: "hosts", hosts })
})

app.get("/", (req, res) => {
  res.send("Hello Griffin!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
