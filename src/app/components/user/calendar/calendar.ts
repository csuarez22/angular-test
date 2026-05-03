import { Component, signal } from "@angular/core"

@Component({
	selector: "app-calendar",
	imports: [],
	template: `
		<div class="card bg-base-100 shadow-lg w-72">
			<div class="card-body p-5">
				<div class="flex items-center justify-between mb-3">
					<span class="font-bold">May 2026</span>
					<div class="flex gap-1">
						<button class="btn btn-ghost btn-xs btn-circle">‹</button>
						<button class="btn btn-ghost btn-xs btn-circle">›</button>
					</div>
				</div>
				<div
					class="grid grid-cols-7 text-center text-xs font-medium text-base-content/50 mb-2"
				>
					<span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span
					><span>Fr</span><span>Sa</span>
				</div>
				<div class="grid grid-cols-7 text-center text-xs gap-y-1">
					<span class="py-1"></span><span class="py-1"></span><span class="py-1"></span
					><span class="py-1"></span><span class="py-1"></span>
					<span class="py-1 text-base-content/40">1</span>
					<span class="py-1 text-base-content/40">2</span>
					<span class="py-1 rounded-full bg-primary text-primary-content font-bold"
						>3</span
					>
					<span class="py-1">4</span>
					<span class="py-1 rounded-full bg-secondary/20 text-secondary font-medium"
						>5</span
					>
					<span class="py-1">6</span>
					<span class="py-1">7</span>
					<span class="py-1 rounded-full bg-accent/20 text-accent font-medium">8</span>
					<span class="py-1">9</span>
					<span class="py-1">10</span>
					<span class="py-1">11</span>
					<span class="py-1 rounded-full bg-accent/20 text-accent font-medium">12</span>
					<span class="py-1">13</span>
					<span class="py-1">14</span>
					<span class="py-1">15</span>
					<span class="py-1">16</span>
					<span class="py-1">17</span>
					<span class="py-1">18</span>
					<span class="py-1">19</span>
					<span class="py-1">20</span>
					<span class="py-1">21</span>
					<span class="py-1">22</span>
					<span class="py-1">23</span>
					<span class="py-1">24</span>
					<span class="py-1">25</span>
					<span class="py-1">26</span>
					<span class="py-1">27</span>
					<span class="py-1">28</span>
					<span class="py-1">29</span>
					<span class="py-1">30</span>
					<span class="py-1">31</span>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-2 w-72">
			<span class="text-xs font-semibold text-base-content/50 uppercase tracking-wider"
				>Upcoming</span
			>
			<div class="flex items-center gap-3 bg-base-100 rounded-xl px-4 py-3 shadow-sm">
				<span class="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
				<div>
					<p class="text-sm font-medium">Team standup</p>
					<p class="text-xs text-base-content/50">May 5 · 9:00 AM</p>
				</div>
			</div>
			<div class="flex items-center gap-3 bg-base-100 rounded-xl px-4 py-3 shadow-sm">
				<span class="w-2 h-2 rounded-full bg-accent shrink-0"></span>
				<div>
					<p class="text-sm font-medium">Sprint review</p>
					<p class="text-xs text-base-content/50">May 8 · 2:00 PM</p>
				</div>
			</div>
			<div class="flex items-center gap-3 bg-base-100 rounded-xl px-4 py-3 shadow-sm">
				<span class="w-2 h-2 rounded-full bg-accent shrink-0"></span>
				<div>
					<p class="text-sm font-medium">Deploy to production</p>
					<p class="text-xs text-base-content/50">May 12 · 11:00 AM</p>
				</div>
			</div>
		</div>
	`,
})
export class Calendar {
	protected readonly title = signal("Calendar")
}
