;(async function () {
  let options = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }

  const collabResp = await fetch(location.origin + "/collabs", options)
  const collabsResult = await collabResp.json()

  const htmlData = (info) =>
    `<a class="rounded-xl basis-1/4 mt-10 text-2xl py-4 bg-white text-black text-center text-blue-500" href="https://twitter.com/${info.data.username}"><div class="">@${info.data.username}</div></a>`

  const collabPlaceholder = document.getElementById("collabs")
  collabsResult.collabs.forEach((collab) => {
    collabPlaceholder.innerHTML += htmlData(collab)
  })

  const hostsResp = await fetch(location.origin + "/hosts", options)
  const hostsResult = await hostsResp.json()

  const hostsPlaceholder = document.getElementById("hosts")
  hostsResult.hosts.forEach((host) => {
    hostsPlaceholder.innerHTML += htmlData(host)
  })
})()
