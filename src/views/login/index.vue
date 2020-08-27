<template>
  <div class="app-login">
    <!-- 登录框 -->
    <div class="login">
      <!-- 偷窥小狗 -->
      <div class="dog-wrap">
        <div class="paw">
          <div class="paw_left">
            <div class="paw_left__part"></div>
            <div class="paw_left__part"></div>
            <div class="paw_left__part"></div>
          </div>
          <div class="paw_right">
            <div class="paw_left__part"></div>
            <div class="paw_left__part"></div>
            <div class="paw_left__part"></div>
          </div>
        </div>
        <div class="puppy">
          <div class="intro">
            Peeping Puppy
          </div>
          <div class="hide"></div>
          <div :class="['wrap', isShow ? 'bodyShow' : 'bodyHide']">
            <div class="body"></div>
            <div class="tail"></div>
            <div class="head">
              <div class="head_eyebrow">
                <div class="head_eyebrow__left"></div>
                <div class="head_eyebrow__right"></div>
              </div>
              <div class="head_ear">
                <div class="head_ear__left"></div>
                <div class="head_ear__right"></div>
              </div>
              <div class="head_earfold">
                <div class="head_earfold__left"></div>
                <div class="head_earfold__right"></div>
              </div>
              <div class="head_eye">
                <div class="head_eye__left">
                  <div class="iris"></div>
                  <div class="pupil"></div>
                </div>
                <div class="head_eye__right">
                  <div class="iris"></div>
                  <div class="pupil"></div>
                </div>
              </div>
              <div class="head_tongue"></div>
              <div class="head_nose"></div>
              <div class="head_top"></div>
              <div class="head_bottom">
                <div class="head_bottom__left"></div>
                <div class="head_bottom__right"></div>
              </div>
              <div class="head_mouth">
                <div class="head_mouth__left"></div>
                <div class="head_mouth__right"></div>
                <div class="head_mouth__top"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- model为表单数据对象 -->
      <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="0">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            @focus="focusPassword"
            @blur="blurPassword"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="large-button" type="primary" :loading="loading" @click="submit('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import api from './api/index';
export default {
  name: 'app-login',
  // mixins: [ api ],
  data() {
    return {
      isShow: true,
      loading: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    focusPassword() {
      this.isShow = false
    },
    blurPassword() {
      this.isShow = true
    },
    submit(form) {
      console.log(form)
      // this.$refs[form].validate(async valid => {
      //   if (valid) {
      //     let loginForm = this.loginForm;
      //     let password = this.$md5(loginForm.password);
      //     this.loading = true;
      //     await this.login({
      //       ...loginForm,
      //         password
      //     })
      //   } else {
      //     return false;
      //   }
      // })
    }
  }
}
</script>
<style lang="postcss" scoped>
  .app-login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login {
      position: relative;
      width: 380px;
      background: #fafafa;
      /* 小狗动画 */
      .dog-wrap {
        width: 130px;
        position: absolute;
        top: -18px;
        left: 50%;
        transform: translate(-50%, 0);
        .puppy .head_eyebrow__left, .puppy .head_eyebrow__right {
          background: #563930;
          width: 16px;
          height: 3px;
          position: absolute;
          z-index: 5;
          bottom: 60px;
        }

        .puppy .head_eye__left .pupil, .puppy .head_eye__right .pupil {
          width: 8px;
          height: 12px;
          background: black;
          border-radius: 100%;
        }
        .puppy .head_eye__left .pupil:after, .puppy .head_eye__right .pupil:after {
          content: "";
          background: white;
          width: 4px;
          height: 4px;
          left: 2px;
          top: 1px;
          border-radius: 10px;
          display: block;
          position: absolute;
        }

        .paw_left, .paw_right {
          position: absolute;
          z-index: 5;
          width: 30px;
          height: 20px;
          border-top-left-radius: 100%;
          border-top-right-radius: 100%;
          background: #b8a392;
        }

        .puppy .head_eye__left, .puppy .head_eye__right {
          background: white;
          position: absolute;
          z-index: 4;
          width: 16px;
          height: 20px;
          border-radius: 100%;
        }

        .hide, .paw, .puppy, .puppy .tail {
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          top: 50%;
          transform: translateY(-50%);
        }

        .puppy .head_earfold__left, .puppy .head_earfold__right {
          position: absolute;
          background: #563930;
          width: 24px;
          height: 38px;
          border-radius: 100%;
          z-index: 10;
          bottom: 60px;
        }

        .puppy .head_ear__left, .puppy .head_ear__right {
          position: absolute;
          background: #563930;
          width: 20px;
          height: 28px;
          border-radius: 100%;
          z-index: 10;
          bottom: 60px;
        }

        .puppy .head_eye__left .iris, .puppy .head_eye__right .iris {
          position: relative;
          background: #a3ebe8;
          width: 13px;
          height: 16px;
          border-radius: 100%;
        }

        .puppy .head_mouth__top, .puppy .head_mouth__left, .puppy .head_mouth__right {
          background: #f8f5f4;
          position: absolute;
          z-index: 3;
        }

        .puppy .head_bottom__left, .puppy .head_bottom__right {
          background: #cdb7a5;
          position: absolute;
          z-index: 3;
          width: 33px;
          height: 40px;
          border-radius: 100%;
        }

        .paw_left__part, .paw_right__part {
          width: 10px;
          height: 10px;
          background: #b8a392;
          border-radius: 10px;
          position: absolute;
          bottom: -4px;
        }
        .paw_left__part:nth-of-type(1), .paw_right__part:nth-of-type(1) {
          left: 0px;
        }
        .paw_left__part:nth-of-type(2), .paw_right__part:nth-of-type(2) {
          left: 10px;
        }
        .paw_left__part:nth-of-type(3), .paw_right__part:nth-of-type(3) {
          left: 20px;
        }

        .hide {
          background: #fafafa;
          width: 150px;
          left: -10px;
          height: 230px;
          z-index: 12;
          bottom: -464px;
        }

        .paw {
          width: 130px;
          z-index: 10;
        }
        .paw_left {
          left: 0;
          top: -10px;
        }
        .paw_right {
          right: 0px;
          top: -10px;
        }

        .puppy {
          width: 130px;
          height: 0px;
        }
        .puppy .intro {
          top: -179px;
          position: absolute;
          text-align: center;
          font-size: 20px;
          color: #a25a4b;
        }
        .puppy .wrap {
          position: relative;
        }
        .puppy .wrap.bodyShow {
          animation: bodyShow 10s infinite;
        }
        .puppy .wrap.bodyHide {
          top: 86px;
        }
        .puppy .body {
          position: absolute;
          z-index: 1;
          width: 100px;
          height: 100px;
          left: 13px;
          top: -46px;
          border-radius: 100%;
          background: #cdb7a5;
        }
        .puppy .tail {
          transform-origin: 5px 100px;
          width: 10px;
          height: 60px;
          top: -40px;
          background: #563930;
          border-radius: 50px;
          animation: tail 1s infinite;
        }
        .puppy .head {
          position: absolute;
          top: 35px;
          left: 5px;
          animation: head 1s infinite;
        }
        .puppy .head_eyebrow__left {
          bottom: 124px;
          left: 30px;
          transform: rotateZ(-14deg);
          animation: eyebrow 10s infinite;
        }
        .puppy .head_eyebrow__right {
          bottom: 124px;
          left: 74px;
          transform: rotateZ(14deg);
          animation: eyebrow2 10s infinite;
        }
        .puppy .head_earfold {
          position: relative;
          top: -6px;
        }
        .puppy .head_earfold__right {
          bottom: 120px;
          left: 79px;
          transform: rotateZ(-30deg);
        }
        .puppy .head_earfold__left {
          bottom: 120px;
          left: 18px;
          transform: rotateZ(30deg);
        }
        .puppy .head_ear {
          position: relative;
          top: -6px;
        }
        .puppy .head_ear__left {
          bottom: 130px;
          transform: rotateZ(-50deg);
          left: 30px;
        }
        .puppy .head_ear__right {
          bottom: 130px;
          transform: rotateZ(50deg);
          left: 70px;
        }
        .puppy .head_top {
          background: #cdb7a5;
          width: 70px;
          height: 70px;
          position: absolute;
          z-index: 3;
          left: 25px;
          bottom: 80px;
          border-radius: 80px;
        }
        .puppy .head_bottom__right {
          left: 67px;
          bottom: 70px;
        }
        .puppy .head_bottom__left {
          left: 20px;
          bottom: 70px;
        }
        .puppy .head_eye__left {
          left: 32px;
          bottom: 100px;
        }
        .puppy .head_eye__left .iris {
          top: 2px;
          left: 2px;
        }
        .puppy .head_eye__left .pupil {
          position: relative;
          left: 4px;
          bottom: 12px;
          animation: eye 10s infinite;
        }
        .puppy .head_eye__right {
          left: 72px;
          bottom: 100px;
        }
        .puppy .head_eye__right .iris {
          top: 2px;
          left: 2px;
        }
        .puppy .head_eye__right .pupil {
          position: relative;
          left: 4px;
          bottom: 12px;
          animation: eye 10s infinite;
        }
        .puppy .head_tongue {
          position: absolute;
          background: pink;
          width: 14px;
          height: 30px;
          border-radius: 40px;
          z-index: 3;
          bottom: 50px;
          left: 54px;
          animation: tongue 1s infinite;
        }
        .puppy .head_nose {
          background: #563930;
          width: 16px;
          height: 10px;
          border-radius: 20px;
          position: absolute;
          z-index: 5;
          left: 52px;
          bottom: 83px;
        }
        .puppy .head_nose:after {
          content: "";
          display: block;
          background: rgba(255, 255, 255, 0.3);
          position: absolute;
          border-radius: 10px;
          width: 4px;
          left: 3px;
          bottom: 4px;
          height: 4px;
        }
        .puppy .head_mouth__top {
          width: 30px;
          height: 30px;
          border-radius: 100%;
          left: 45px;
          bottom: 73px;
        }
        .puppy .head_mouth__left {
          width: 33px;
          height: 25px;
          border-radius: 100%;
          left: 33px;
          bottom: 65px;
        }
        .puppy .head_mouth__left:after {
          width: 30px;
          height: 20px;
          background: #f8f5f4;
          content: "";
          position: absolute;
          z-index: 5;
          border-radius: 5px;
          left: 3px;
          bottom: 11px;
          display: block;
          transform: rotatez(-43deg);
        }
        .puppy .head_mouth__right {
          width: 33px;
          height: 25px;
          border-radius: 100%;
          left: 56px;
          bottom: 65px;
        }
        .puppy .head_mouth__right:after {
          width: 30px;
          height: 20px;
          background: #f8f5f4;
          content: "";
          position: absolute;
          z-index: 5;
          border-radius: 5px;
          left: -1px;
          bottom: 11px;
          display: block;
          transform: rotatez(42deg);
        }

        @keyframes tail {
          0% {
              transform: translateY(-50%) rotateZ(-45deg);
          }
          50% {
              transform: translateY(-50%) rotateZ(45deg);
          }
          100% {
              transform: translateY(-50%) rotateZ(-45deg);
          }
        }
        @keyframes head {
          0% {
            top: 35px;
          }
          50% {
            top: 40px;
          }
          100% {
            top: 35px;
          }
        }
        @keyframes tongue {
          0% {
            bottom: 50px;
          }
          50% {
            bottom: 46px;
          }
          100% {
            bottom: 50px;
          }
        }
        @keyframes eyebrow {
          0% {
              transform: rotateZ(-3deg) translateY(4px);
          }
          30% {
              transform: rotateZ(-3deg) translateY(4px);
          }
          35% {
              transform: rotateZ(-17deg) translateY(-2px);
          }
          100% {
             transform: rotateZ(-17deg) translateY(-2px);
          }
        }
        @keyframes eyebrow2 {
          0% {
              transform: rotateZ(3deg) translateY(4px);
          }
          30% {
              transform: rotateZ(3deg) translateY(4px);
          }
          35% {
              transform: rotateZ(17deg) translateY(-2px);
          }
          100% {
              transform: rotateZ(17deg) translateY(-2px);
          }
        }
        @keyframes bodyShow {
          0% {
            top: 60px;
          }
          10% {
            top: 60px;
          }
          40% {
            top: 60px;
          }
          41% {
            top: 60px;
          }
          51% {
            top: 0px;
          }
          90% {
            top: 0px;
          }
          100% {
            top: 60px;
          }
        }
        @keyframes eye {
          0% {
            left: 4px;
            bottom: 12px;
          }
          10% {
            left: 4px;
            bottom: 12px;
          }
          15% {
            left: 0px;
            bottom: 12px;
          }
          20% {
            left: 8px;
            bottom: 12px;
          }
          25% {
            left: 4px;
            bottom: 12px;
          }
        }        
      }
    }
  }
</style>