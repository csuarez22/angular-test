import { Component, signal } from "@angular/core"
import { RouterOutlet } from "@angular/router"

import { Login } from "./components/user/login"
import { Register } from "./components/user/register"
import { Calendar } from "./components/user/calendar/calendar"

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Login, Register, Calendar],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	userRegister = signal(false)
}
