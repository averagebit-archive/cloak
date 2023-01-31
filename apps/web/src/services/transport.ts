import { createConnectTransport, createPromiseClient } from "@bufbuild/connect-web";
import { CloakService } from "../../generated/cloak_service/service_connectweb";

const transport = createConnectTransport({
    baseUrl: "http://localhost:8080",
    // By default, connect-web clients use the JSON format.
    // Set this option to true to use the binary format.
    useBinaryFormat: false,

    // Controls what the fetch client will do with credentials, such as
    // Cookies. The default value is "same-origin", which will not
    // transmit Cookies in cross-origin requests.
    credentials: "omit",

    // Interceptors apply to all calls running through this transport.ts.
    interceptors: [],
});

const client = createPromiseClient(CloakService, transport);

export default client;
