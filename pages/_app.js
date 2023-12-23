import "@/styles/reset.css";
import "@/styles/variable.css";
import { AuthProvider } from "@/utils/firebase/provider";
import { authService } from "@/utils/firebase/client";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}
