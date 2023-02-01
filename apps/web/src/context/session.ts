import { redirect } from "solid-start/server";
import { createCookieSessionStorage } from "solid-start/session";
import client from "~/services/transport";

type LoginForm = {
    username: string;
};

const storage = createCookieSessionStorage({
    cookie: {
        name: "user_session",
        // secure doesn't work on localhost for Safari
        // https://web.dev/when-to-use-local-https/
        secure: true,
        secrets: ["hello"],
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true
    }
});

export async function login({ username }: LoginForm) {
    const user = await client.login({ username });
    if (!user) return null;

    return user;
}

export async function logout(request: Request) {
    const session = await storage.getSession(request.headers.get("Cookie"));
    return redirect("/login", {
        headers: {
            "Set-Cookie": await storage.destroySession(session)
        }
    });
}

export async function getUser(request: Request) {
    const userId = await getUserId(request);

    if (typeof userId !== "string") {
        return null;
    }

    try {
        // const user = await db.user.findUnique({ where: { id: userId } });
        return { id: "sadasd" };
    } catch {
        throw logout(request);
    }
}

export async function createUserSession(token: string, redirectTo: string) {
    const session = await storage.getSession();
    session.set("user_session", token);
    console.log("redirect to", redirectTo);
    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await storage.commitSession(session)
        }
    });
}

async function getUserId(request: Request) {
    const session = await getUserSession(request);
    const userId = session.get("user_session");
    if (!userId || typeof userId !== "string") return null;
    return userId;
}

function getUserSession(request: Request) {
    return storage.getSession(request.headers.get("Cookie"));
}
