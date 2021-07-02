<template>
  <div>
    <div
      class="modal fade"
      id="loginModal"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="loginModal">登入</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body pb-5">
            <div class="mb-3">
              <label for="username" class="form-label">帳號</label>
              <input type="username" class="form-control bg-light" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密碼</label>
              <input type="password" class="form-control bg-light" />
              <div class="form-text">忘記密碼</div>
            </div>
            <div class="d-grid col">
              <button
                type="button"
                class="btn btn-theme rounded-pill btn-theme-hover"
              >
                登入
              </button>
            </div>
          </div>
          <div class="position-relative" style="margin-bottom: 32px">
            <div
              class="progress"
              style="height: 1px;"
            >
              <div
                class="progress-bar bg-lightgray"
                role="progressbar"
                style="width: 100%; height: 1px"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <sapn class=" position-absolute top-50 start-50 translate-middle subText"
                >還沒有帳號? <a href="#" class="link-color">註冊一個帳號</a></sapn
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
button {
  font-family: NotoSansCJKtc-Bold;
}
</style>