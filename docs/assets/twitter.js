;(async function () {
  const htmlData = (info) =>
    `<a class="rounded-xl basis-1/4 mt-10 text-xl py-4 bg-white text-black text-center text-blue-500" href="https://twitter.com/${info}"><div>@${info}</div></a>`

  const htmlDataCommunities = (info) =>
    `<a class="rounded-xl basis-1/4 mt-10 text-xl py-4 bg-white text-black text-center text-blue-500" href="https://twitter.com/${info}"><div>@${info}</div></a>`

  const alphaCommunities = [
    "DiamondNFT",
    "AlphaPH_",
    "TangorCrypto",
    "UEJJCOM",
    "Djgirinnft",
    "TropadaDrih",
  ]


  const collabPlaceholder = document.getElementById("collabs")
  const hosts = [
    "SteveRyanOnline",
    "SkurpySocial",
    "KoKid951",
    "doodlegenics",
    "Famous_Dyl",
    "s0meone_U_Know",
    "TheVoiceOfCash",
    "Wedripz.eth",
    "GorillaMansion",
    "DDish123",
    "PuffPandas",
    "LegendQueenWeb3",
    "stukwan",
    "EnvelopeCityInk",
    "StrokeDriven",
    "JuicyXBrat",
    "BTBD_ImDiDi",
    "AunySIllyMe",
    "Cheeeebz",
    "ZongKia",
  ]

  const collabs = ["SaanhoiClub", "GoatSquadNFT", "D_CryptoFamily"]

  collabs.forEach((collab) => {
    collabPlaceholder.innerHTML += htmlData(collab)
  })

  const hostsPlaceholder = document.getElementById("hosts")
  hosts.forEach((host) => {
    hostsPlaceholder.innerHTML += htmlData(host)
  })

  const alphaPlaceholder = document.getElementById("alpha")
  alphaCommunities.forEach((host) => {
    alphaPlaceholder.innerHTML += htmlDataCommunities(host)
  })
})()
