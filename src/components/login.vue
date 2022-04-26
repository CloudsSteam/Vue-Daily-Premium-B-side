<template>
  <div class="login-container">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
          'email',
          { rules: [{ required: true, message: 'Please input your email !' }] }
        ]"
          placeholder="Email"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
          type="password"
          placeholder="Password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <!-- <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]">
          Remember me
        </a-checkbox> -->
        <a
          class="login-form-forgot"
          href=""
        >
          Forgot password
        </a>
        <a-button
          type="primary"
          html-type="submit"
          class="login-form-button"
        >
          Log in
        </a-button>
        Or <a href="">
          register now!
        </a>
      </a-form-item>
    </a-form>
  </div>

</template>
<script>
import loginApi from '@/api/login';

export default {
  data() {
    return {
      // remember: true,
      loginInfo: {
        email: '',
        password: '',
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  create() {
    // this.$store.state.user;
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // this.remember = values.remember;
          // console.log(this.remember);

          console.log(values);

          // this.loginInfo = values;
          // console.log(this.loginInfo);
          loginApi.login(values).then((res) => {
            console.log(res);
            this.$store.dispatch('setUserInfo', res);
            this.$router.push({
              name: 'Home',
            });
          }).catch((error) => {
            // console.log(error);
            this.$message.error(error);
          });
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login-container {
  max-width: 500px;
  margin: 100px auto;
  border: 1px solid #eee;
  padding: 30px 20px 6px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
