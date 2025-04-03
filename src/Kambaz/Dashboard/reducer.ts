import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enrollment {
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
  enrollments: [],
};

export const ENROLL_COURSE = "enrollments/enrollCourse";
export const UNENROLL_COURSE = "enrollments/unenrollCourse";

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      state.enrollments.push({
        user: action.payload.userId,
        course: action.payload.courseId,
      });
    },
    unenrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(
            enrollment.user === action.payload.userId &&
            enrollment.course === action.payload.courseId
          )
      );
    },
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.enrollments = action.payload;
    },
  },
});

export const { enrollCourse, unenrollCourse, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;