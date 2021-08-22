// ナビバー
Vue.component("navbar", {
  props: ["lang"],

  template: `
      <nav class="navbar navbar-expand-md sticky-top navbar-light bg-success bg-gradient">
        <div class="container-fluid">
          <a class="navbar-brand" href="../index.html">ロゴ</a>
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
            <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="../../app/04_login.html">生徒</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="04_login.html">先生</a>
              </li>
            </ul> -->
            <!-- 言語選択 -->
            <!-- <select class="ms-auto" v-model="clang" @change="$emit('update:lang', $event.target.value)">
              <option selected value="ja">日本語</option>
              <option value="en">English</option>
            </select> -->
            <!-- 遷移 -->
            <ul class="navbar-nav ms-auto mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-chat-dots fs-4"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-book fs-4"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-file-earmark-text fs-4"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-question-circle fs-4"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-gear-fill fs-4"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-box-arrow-right fs-4"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
`,
  methos: {},
  computed: {
    clang: {
      get() {
        return this.lang;
      },
      set(newVal) {
        if (this.lang !== newVal) this.$emit("input", newVal);
      },
    },
  },
});

// サイドメニュー
Vue.component("sidemenu", {
  template: `
  <nav
            id="sidebarMenu"
            class="col-md-2 d-md-block bg-light sidebar collapse"
          >
            <div class="sidebar-sticky py-3">
              <section>
                <div class="accordion" id="accordionExample">
                  <!-- 学習システム -->
                  <div class="accordion-item mb-2">
                    <h3 class="accordion-header" id="heading2">
                      <button
                        class="accordion-button btn-secondary collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        学習システム
                      </button>
                    </h3>
                    <div
                      id="collapse1"
                      class="accordion-collapse collapse "
                      aria-labelledby="heading2"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body p-1">
                        <ul class="nav flex-column">
                          <li class="nav-item">
                            <a class="nav-link" href="../app/01_top.html">
                              トップ:Bookリスト
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="../app/02_study.html">
                              学習・問題
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="../app/03_signin.html">
                              アカウント登録
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="../app/04_login.html">
                              ログイン
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="../app/04_login.html">
                              パスワード変更
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="../app/04_login.html">
                              book作成
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="../app/04_login.html">
                              問題作成
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="../app/01_login.html">
                              成績確認
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- システム管理 -->
                  <div class="accordion-item mb-2">
                    <h3 class="accordion-header" id="heading2">
                      <button
                        class="accordion-button btn-success "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#admin"
                        aria-expanded="true"
                        aria-controls="admin"
                      >
                        システム管理
                      </button>
                    </h3>
                    <div
                      id="admin"
                      class="accordion-collapse collapse show"
                      aria-labelledby="heading2"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body p-1">
                        <ul class="nav flex-column">
                          <li class="nav-item">
                            <a class="nav-link" href="01_login.html">
                              ログイン
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="01_login.html">
                              カテゴリーマスタ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="01_login.html">
                              レベルマスタ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="01_login.html">
                              Bookマスタ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="01_login.html">
                              問題マスタ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="01_login.html">
                              ユーザマスタ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="01_login.html"> 投稿歴 </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="01_login.html"> 回答歴 </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </nav>
  `,
});
