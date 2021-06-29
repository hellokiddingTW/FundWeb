<template>
  <div id="app">
    <div id="nav">
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
                <a class="nav-link nav-linkColor" aria-current="page" href="#">關於</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link nav-linkColor" href="#">挖寶</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link nav-linkColor" href="#" tabindex="-1" aria-disabled="true"
                  >我有個大膽的想法</a
                >
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn  btnRounded  btnPd me-3" type="submit">
                登入
              </button>
              <button class="btn btn-outline-secondary btnRounded btnPd " type="submit">
                註冊
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

#nav{
  border-bottom: 5px solid #FFDF65;
}

form{
  button{
    font-family: NotoSansCJKtc-Bold;
  }
  button:nth-child(1) {
   color: #636057;
   background-color: #FFDF65;
   border: none;
  }
.btnPd{
    padding:.5rem 2.5rem;
  }
.btnRounded{
  border-radius: 19px;
  border: 2px solid #858377;
  }
}




</style>
