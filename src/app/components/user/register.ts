import { Component, signal } from "@angular/core"

@Component({
	selector: "app-register",
	imports: [],
	// styleUrl: "./register.css",
	// templateUrl: "./register.html"
	template: ` <div class="card bg-base-100 shadow-md w-80">
		<div class="card-body gap-4">
			<div>
				<h2 class="card-title text-xl">Create account</h2>
				<p class="text-sm text-base-content/60 mt-1">Start managing your schedule</p>
			</div>
			<form class="flex flex-col gap-3">
				<div class="flex flex-col gap-1">
					<span class="text-sm font-medium">Username</span>
					<input
						type="text"
						class="input input-bordered w-full"
						placeholder="Choose a username"
						id="username"
						[value]="username()"
						(input)="username.set($event.target.value)"
					/>
				</div>
				<div class="flex flex-col gap-1">
					<span class="text-sm font-medium">Email</span>
					<input
						type="email"
						class="input input-bordered w-full"
						placeholder="you@example.com"
						id="email"
						[value]="email()"
						(input)="email.set($event.target.value)"
					/>
				</div>
				<div class="flex flex-col gap-1">
					<span class="text-sm font-medium">Password</span>
					<input
						type="password"
						class="input input-bordered w-full"
						placeholder="••••••••"
						id="password"
						[value]="password()"
						(input)="password.set($event.target.value)"
					/>
				</div>
				<button class="btn btn-primary w-full mt-1" type="submit">Create account</button>
			</form>
		</div>
	</div>`,
})
export class Register {
	protected readonly username = signal("")
	protected readonly email = signal("")
	protected readonly password = signal("")
}
