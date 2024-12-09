import axiosInstance from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface BodyTypes {
  pharmacyName?: string;
  pharmacyAddress?: string;
}

interface Pharmacy {
  id: string;
  pharmacyAddress: string;
  pharmacyName: string;
  providerId: string;
  status: string;
}
interface StateProps {
  pharmacies: Pharmacy[];
  loading: boolean;
  error: any;
}

const initialState: StateProps = {
  pharmacies: [],
  loading: false,
  error: null,
};
export const fetchPharmacies = createAsyncThunk(
  "pharmacy/fetchPharmacies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/pharmacy");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const createPharmacy = createAsyncThunk(
  "pharmacy/createPharmacy",
  async (data: BodyTypes, { rejectWithValue }) => {
    const user = JSON.parse(localStorage.getItem("user")).providerId;

    try {
      const response = await axiosInstance.post(
        `/healthcare-provider/pharmacy?providerId=${user}`,
        data
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const deactivatePharmacy = createAsyncThunk(
  "pharmacy/deactivatePharmacy",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/healthcare-provider/providers/${id}/deactivate`
      );
      return response.data;
    } catch (e) {
      console.log("errorrr", e)
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const activatePharmacy = createAsyncThunk(
  "pharmacy/activatePharmacy",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/healthcare-provider/pharmacy/${id}/activate`
      );
      return response.data;
    } catch (e) {
      // console.log("errorrr", e)
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const terminatePharmacy = createAsyncThunk(
  "pharmacy/terminatePharmacy",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/healthcare-provider/providers/${id}/terminate`
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPharmacies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPharmacies.fulfilled, (state, action) => {
        state.loading = false;
        state.pharmacies = action.payload;
      })
      .addCase(fetchPharmacies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPharmacy.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPharmacy.fulfilled, (state, action) => {
        state.loading = false;
        state.pharmacies.push(action.payload);
        console.log("fulfilled", action);
      })
      .addCase(createPharmacy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("rejected", action);
      })
      .addCase(deactivatePharmacy.pending, (state) => {
        state.loading = true;
      })
      .addCase(deactivatePharmacy.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.pharmacies.findIndex(
          (item) => item.id === action.payload.id
        );
        state.pharmacies[index] = action.payload;
        console.log("fulfilled", action);
      })
      .addCase(deactivatePharmacy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("Rejected", action);
      })
      .addCase(activatePharmacy.pending, (state) => {
        state.loading = true;
      })
      .addCase(activatePharmacy.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.pharmacies.findIndex(
          (item) => item.id === action.payload.id
        );
        state.pharmacies[index] = action.payload;
        console.log("fulfilled", action);
      })
      .addCase(activatePharmacy.rejected, (state, action) => {
        state.loading = false;
        (state.error = action.payload), console.log("Rejected", action);
      })
      .addCase(terminatePharmacy.pending, (state) => {
        state.loading = true;
      })
      .addCase(terminatePharmacy.fulfilled, (state, action) => {
        state.loading = false;
        state.pharmacies = state.pharmacies.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(terminatePharmacy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = pharmacySlice.actions;

export default pharmacySlice.reducer;
