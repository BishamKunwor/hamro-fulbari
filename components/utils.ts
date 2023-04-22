import store from "store";

export function updateCartAmount() {
  const styleTag = document.querySelector("#cart-update-style");
  styleTag!.innerHTML = "#cart-content::after{" + "content:'" + 1 + "'}";
}

export function addDefaultDbDatas() {
  if (!store.get("userCredentials")) {
    store.set("userCredentials", []);
  }
  if (!store.get("activeUser")) {
    store.set("activeUser", {});
  }
}
