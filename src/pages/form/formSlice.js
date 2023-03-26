import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import formData from "./formData";
import { userCurrentSelect } from "../.././redux/selector";
import { USERS_DATA } from "../.././data/api/data";

export const fetchUser = createAsyncThunk("users/fetchUser", async (data) => {
  try {
    const response = await axios.get(USERS_DATA);
    if (data) {
      console.log();
      return {
        user: data,
        users: response.data,
      };
    }
    return await response.data;
  } catch (error) {
    return console.log(error);
  }
});

export const fetchPostUser = createAsyncThunk(
  "users/fetchPostUser",
  async (data) => {
    try {
      const response = await axios.post(USERS_DATA, data);
      return await response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const fetchPutUser = createAsyncThunk(
  "users/fetchPutUser",
  async (id, data) => {
    try {
      const response = await axios.put(
        `${USERS_DATA}/${id}`,
        userCurrentSelect(data)
      );

      return await response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const fetchDeleteUser = createAsyncThunk(
  "users/fetchDeleteUser",
  async (id) => {
    try {
      const response = await axios.delete(`${USERS_DATA}/${id}`);
      return await response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export default createSlice({
  name: "form",
  initialState: {
    users: [],
    loading: "idle",
    error: "",
    userCurrent: {},
    messageUser: "",
    stateMessage: "Đăng nhập thành công",
  },
  reducers: {
    registerSuccess: (state, action) => {
      console.log(state.users);
      //   fetchUser();
      //   fetchPostUser(action.payload);
    },
    loginSuccess: (state, action) => {
      state.stateMessage = action.payload;
    },
    editProfile: (state, action) => {
      // đang mặc định là chỉ thay đổi hình ảnh
      state.userCurrent.thumb.preview = action.payload;
    },
    logOut: (state, action) => {
      state.userCurrent = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.users = [];
      state.loading = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      if (payload.user) {
        const { user, users } = payload;
        state.users = [...users];
        const userSuccess = users.filter(
          (item) =>
            item.username === user.username && item.password === user.password
        );
        if (userSuccess.length > 0) {
          state.userCurrent = userSuccess[0];
          state.stateMessage = "success";
          state.messageUser = "Đăng nhập thành công";
        } else {
          state.stateMessage = "err";
          state.messageUser = "Sai mật khẩu hoặc tài khoản";
        }
      } else {
        state.users = payload;
      }
      state.loading = "loaded";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
    builder.addCase(fetchPostUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.messageUser = "Đăng kí thành công";

      state.loading = "loaded";
    });
    builder.addCase(fetchPutUser.fulfilled, (state, action) => {});
    builder.addCase(fetchDeleteUser.fulfilled, (state, action) => {});
  },
});
