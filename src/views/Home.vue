<template>
  <div>
    <main>
      <div class="banner bg-light">
        <div class="container py-5">
          <div class="tittle mb-4">
            <span class="badge bg-secondary">魔法科技</span>
            <h2 class="lh-base">拍出會動的照片｜LivePhotos 魔法拍立得</h2>
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
                <div class="p-3 border-left-theme bg-white mb-4">
                  <p class="m-0">
                    專案募資中
                    <br />
                    在 2021/06/14 23:59 募資結束前，您都可以贊助我們！
                  </p>
                </div>
                <div class="btnGroup">
                  <div class="row mb-2">
                    <div class="col-md-12">
                      <button
                        class="btn py-2 w-100 bg-theme btnRounded border-0"
                      >
                        贊助專案
                      </button>
                    </div>
                  </div>
                  <div class="row g-1">
                    <div class="col-md-8 col-6">
                      <button
                        class="btn btn-outline-secondary btnRounded py-2 w-100"
                      >
                        追蹤專案
                      </button>
                    </div>
                    <div class="col-md-4 col-6">
                      <button
                        class="btn btn-outline-secondary btnRounded py-2 w-100"
                      >
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

      <div class="container">
        <div class="row">
          <div class="col-md-4">jdiwjdiwjdowdjwoidw;oj</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.bg-theme {
  background-color: #ffdf65;
}
.subText {
  font-family: NotoSansCJKtc-Regular;
  font-size: 14px;
  color: #636057;
}

.border-left-theme {
  border-left: 3px solid #ffdf65;
}

.btnGroup {
  color: #636057;
  font-size: 1.25rem;
  font-family: NotoSansCJKtc-Bold;
  .btnRounded {
    border-radius: 19px;
    border: 2px solid #858377;
  }
}
</style>
