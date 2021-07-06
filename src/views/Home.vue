<template>
  <div>
    <div id="nav" class="border-bottom border-3 border-theme">
      <nav class="navbar navbar-expand-lg navbar-light container py-3">
        <div class="container-fluid">
          <a class="navbar-brand me-4" href="#">
            <img
              src="https://hexschool.github.io/boootstrap5WebLayout/assets/logo.jpg"
              alt=""
              width="111"
              height="40"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item px-3">
                <a class="nav-link nav-linkColor" aria-current="page" href="#"
                  >關於</a
                >
              </li>
              <li class="nav-item px-3">
                <a class="nav-link nav-linkColor" href="#">挖寶</a>
              </li>
              <li class="nav-item px-3">
                <a
                  class="nav-link nav-linkColor"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                  >我有個大膽的想法</a
                >
              </li>
            </ul>
            <form class="d-flex">
              <button
                class="btn btn-theme rounded-pill btnPd me-3 btn-theme-hover"
                type="submit"
                @click.prevent="openModal()"
              >
                登入
              </button>
              <button
                class="
                  btn btn-outline-secondary
                  border-2
                  rounded-pill
                  btnPd
                  btn-secondary-hover
                "
                type="submit"
              >
                註冊
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <main>
      <div class="banner bg-light">
        <div class="container py-md-5 py-3">
          <div class="tittle mb-4">
            <span class="badge bg-secondary">魔法科技</span>
            <h2 class="lh-base letter-space-l">
              拍出會動的照片｜LivePhotos 魔法拍立得
            </h2>
          </div>
          <div class="content">
            <div class="row">
              <div class="col-md-6">
                <img
                  class="w-100"
                  src="https://hexschool.github.io/boootstrap5WebLayout/assets/produt_image.jpg"
                  alt=""
                />
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <span class="subText">目標$600,000</span>
                  <h3>$280,047</h3>
                  <div class="progress">
                    <div
                      class="progress-bar bg-theme text-secondary"
                      role="progressbar"
                      style="width: 41%"
                      aria-valuenow="41"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      41%
                    </div>
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col-6">
                    <span class="subText">贊助人數</span>
                    <h3>1374 人</h3>
                  </div>
                  <div class="col-6">
                    <span class="subText">募資倒數</span>
                    <h3>27 天</h3>
                  </div>
                </div>
                <div class="icon mb-3">
                  <img
                    class="me-4"
                    src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good01.svg"
                    alt=""
                  />
                  <img
                    class="me-4"
                    src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good02.svg"
                    alt=""
                  />
                  <img
                    class="me-4"
                    src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good03.svg"
                    alt=""
                  />
                  <img
                    class="me-4"
                    src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good04.svg"
                    alt=""
                  />
                </div>
                <div
                  class="p-3 border-start border-3 border-theme bg-white mb-4"
                >
                  <p class="m-0">
                    專案募資中
                    <br />
                    在 2021/06/14 23:59 募資結束前，您都可以贊助我們！
                  </p>
                </div>
                <div class="btnGroup">
                  <div class="row mb-2">
                    <div class="col-md-12 d-grid">
                      <button
                        class="
                          btn btn-theme btn-theme-hover
                          py-2
                          rounded-pill
                          border-0
                        "
                      >
                        贊助專案
                      </button>
                    </div>
                  </div>
                  <div class="row g-1">
                    <div class="col-md-8 col-6 d-grid">
                      <button
                        class="
                          btn btn-outline-secondary
                          border-2
                          rounded-pill
                          py-2
                          btn-secondary-hover
                        "
                      >
                        <span class="material-icons align-bottom me-2 heart">
                          favorite
                        </span>
                        追蹤專案
                      </button>
                    </div>
                    <div class="col-md-4 col-6 d-grid">
                      <button
                        class="
                          btn btn-outline-secondary
                          border-2
                          rounded-pill
                          py-2
                          btn-secondary-hover
                        "
                      >
                        <span class="material-icons align-bottom me-2">
                          share
                        </span>

                        分享
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-bottom border-lightgray bg-white sticky-top">
        <div class="container">
          <div class="d-md-flex">
            <nav class="navbar-light">
              <ul class="navbar-nav flex-row justify-content-between">
                <li
                  class="nav-item"
                  @click="clicked = '專案介紹'"
                  :class="{ navActive: clicked == '專案介紹' }"
                >
                  <router-link class="nav-link nav-fz p-3" href="#" to="/intro"
                    >專案介紹</router-link
                  >
                </li>
                <li
                  class="nav-item"
                  @click="clicked = '常見問答'"
                  :class="{ navActive: clicked == '常見問答' }"
                >
                  <router-link class="nav-link nav-fz p-3" href="#" to="/FAQ"
                    >常見問答</router-link
                  >
                </li>
                <li
                  class="nav-item"
                  @click="clicked = '目前進度'"
                  :class="{ navActive: clicked == '目前進度' }"
                >
                  <router-link
                    class="nav-link nav-fz p-3"
                    href="#"
                    to="/progress"
                    >目前進度</router-link
                  >
                </li>
                <li
                  class="nav-item"
                  @click="clicked = '留言'"
                  :class="{ navActive: clicked == '留言' }"
                >
                  <router-link
                    class="nav-link nav-fz p-3"
                    href="#"
                    to="/message"
                    >留言</router-link
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row g-md-5">
          <div class="col-md-8">
            <router-view />
            <Sidebar class="d-md-none d-block"></Sidebar>
            <div class="d-flex justify-content-center">
              <img
                src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_heart.svg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="position-relative my-4">
              <div class="progress" style="height: 3px">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <h4
                  class="
                    position-absolute
                    top-50
                    start-50
                    translate-middle
                    bg-white
                    px-2
                  "
                >
                  贊助專案
                </h4>
              </div>
            </div>

            <form class="needs-validation" novalidate>
              <div class="mb-3">
                <label class="form-label">贊助方案</label>
                <select
                  class="form-select text-secondary bg-light"
                  aria-label="Default select example"
                  required
                >
                  <option selected>請選擇一個方案</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div class="invalid-feedback">請選擇一個方案</div>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名</label>
                <input
                  type="name"
                  class="form-control bg-light"
                  id="name"
                  required
                />
                <div class="invalid-feedback">請輸入正確的收件人姓名</div>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">聯絡電話</label>
                <input
                  type="phone"
                  class="form-control bg-light"
                  id="phone"
                  required
                />
                <div class="invalid-feedback">請輸入正確的連絡電話</div>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">連絡信箱</label>
                <input
                  type="password"
                  class="form-control bg-light"
                  id="email"
                  required
                />
                <div class="invalid-feedback">請輸入正確的連絡信箱</div>
              </div>
              <div class="mb-3">
                <label class="form-label">付款方式</label>
                <select
                  class="form-select text-secondary bg-light"
                  aria-label="Default select example"
                  required
                >
                  <option selected>請選擇一個付款方式</option>
                  <option value="1">信用卡</option>
                  <option value="2">轉帳</option>
                  <option value="3">線上支付</option>
                </select>
                <div class="invalid-feedback">請選擇一種付款方式</div>
              </div>
              <div class="pt-2 d-grid d-md-block text-center">
                <button
                  type="submit"
                  class="
                    btn btn-theme
                    btnPd-lg
                    rounded-pill
                    btn-theme-hover
                    fs-5
                  "
                  @click="validation()"
                >
                  贊助專案
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-4 d-md-block d-none">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
      <footer class="cantainer-fluid bg-dark footerPd">
        <p class="text-white text-center m-0">
          Copyright © 拼拼 All rights reserved.
        </p>
      </footer>
    </main>
    <LoginModal />
  </div>
</template>
  
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
</script>


<script>
import Sidebar from "../components/Sidebar";
import LoginModal from "../components/loginModal";
import { Modal } from "bootstrap";

(function () {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
   console.log('1232')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit",function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          console.log('1232')
        }
        form.classList.add("was-validated");
        console.log('1232')
      },
      false
    );
  });
})();


export default {
  name: "Home",
  components: {
    Sidebar,
    LoginModal,
  },
  data() {
    return {
      clicked: "專案介紹",
    };
  },
  methods: {
    openModal: function () {
      console.log("123");
      let myModal = new Modal(document.getElementById("loginModal"));
      myModal.show();
    },
    validation: function () {
      "use strict";
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
  },
  created() {
    // this.validation()
  },
};



</script>

<style lang="scss" scoped>
button {
  font-family: NotoSansCJKtc-Bold;
}

.btnPd {
  padding: 0.5rem 2rem;
}

.btnPd-lg {
  padding: 0.75rem 3rem;
}

.footerPd {
  padding: 2rem 0;
}
.subText {
  font-family: NotoSansCJKtc-Regular;
  font-size: 14px;
  color: #636057;
}

.nav-fz {
  font-size: 14px;
}

.navActive {
  font-family: NotoSansCJKtc-Bold;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #ffdf65;
    left: 0;
    bottom: 0;
  }
}

@media (min-width: 768px) {
  .nav-fz {
    font-size: 16px;
  }
}
</style>
