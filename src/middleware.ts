import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const token = req.cookies.get("@tallesamaral:token"); // Substitua pelo nome correto do seu cookie
	const { pathname } = req.nextUrl;

	// if (pathname === '/backoffice/sign-in') {
	//   return NextResponse.next()
	// }

	// Se o usuário já estiver autenticado e tentar acessar /sign-in, redireciona para /backoffice
	if (pathname === "/backoffice/sign-in" && token) {
		return NextResponse.redirect(new URL("/backoffice", req.url));
	} else if (pathname === "/backoffice/sign-in" && !token) {
		return NextResponse.next();
	}

	// Se o usuário tentar acessar qualquer coisa dentro de /backoffice/ sem um token, redireciona para /login
	if (pathname.startsWith("/backoffice") && !token) {
		return NextResponse.redirect(new URL("/", req.url));
	}

	return NextResponse.next(); // Permite a requisição continuar normalmente
}

export const config = {
	matcher: ["/backoffice/:path*", "/sign-in"], // Protege as rotas do backoffice e monitora /sign-in
};
