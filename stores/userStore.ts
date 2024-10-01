// stores/authStore.ts
import { defineStore } from "pinia";
import useApi from "@/composables/useApi";

export type User = {
  ulid: string;
  name: string;
  email: string;
  avatar: string;
  must_verify_email: boolean;
  has_password: boolean;
  roles: string[];
  providers: string[];
};

export const useAuthStore = defineStore("authStore", () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();

  // Trạng thái người dùng và token
  const user = ref<User | null>(null);
  const token = useCookie("member_login_token", {
    path: "/",
    sameSite: "strict",
    secure: config.public.apiBaseUrl.startsWith("https://"),
    maxAge: 60 * 60 * 24 * 365,
  });

  const logged = computed(() => !!token.value);

  // Hàm đăng nhập
  const login = async (credentials: { name: string; password: string }) => {
    try {
      const datas = await useApi("auth/login", {
        method: "POST",
        body: credentials,
      });
      if (datas.data.access_token) {
        token.value = datas.data.access_token;
        await fetchUser(); // Lấy thông tin người dùng sau khi đăng nhập
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Lấy thông tin người dùng
  const fetchUser = async () => {
    try {
      const data = await useApi("user", {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      if (data.user) {
        user.value = data.user;
      }
    } catch (error) {
      console.error("Fetching user data failed:", error);
    }
  };

  // Đăng xuất
  const logout = async () => {
    try {
      const response = await useApi("auth/logout", {
        method: "POST",
      });

      if (response.status === 200) {
        token.value = "";
        user.value = null;
        nuxtApp.runWithContext(() => {
          return navigateTo("/");
        });
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { user, logged, login, fetchUser, logout, token };
});
