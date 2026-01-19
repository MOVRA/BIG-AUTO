export type SignInResponsePayload = {
  message: string;
  user_id: number;
};

export interface VerifyOtp {
  otp_code: string;
  user_id: number;
}
