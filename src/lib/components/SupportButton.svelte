<script>
</script>

<div class="donation-section">
	<div class="support-card">
		<div class="card-content">
			<p class="support-message">
				Want to keep this project
				<span class="alive-text"> ✨alive✨ </span>
				?
			</p>

			<a
				href="https://ko-fi.com/typos1"
				target="_blank"
				rel="noopener noreferrer"
				class="support-button"
			>
				<div class="button-content">
					❤️<span class="button-text">Support Me!</span>❤️
				</div>
			</a>

			<p class="disclaimer">Your support helps maintain and improve this project</p>
		</div>
	</div>
</div>

<style>
	:root {
		--main-purple: #494efd;
	}

	.donation-section {
		position: relative;
	}

	.support-card {
		background-color: white;
		border-radius: 1rem;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		border: 1px solid #f3f4f6;
		padding: 1.5rem;
		text-align: center;
		position: relative;
		overflow: hidden;
        border-top: 3px solid var(--main-purple);
        margin-top: 5rem;
	}

	.card-content {
		position: relative;
	}

	.support-message {
		color: #374151;
		font-size: 1.125rem;
		margin-bottom: 1.5rem;
		font-weight: 500;
		margin-top: 0;
	}

	.alive-text {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--main-purple);
	}

	.support-button {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 2rem;
		background: linear-gradient(to right, var(--main-purple), #5b21b6);
		color: white;
		font-weight: 600;
		border-radius: 500px;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		overflow: hidden;
	}

	.support-button:hover {
		transform: translateY(-8px);
	}

	.button-content {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.button-text {
		font-size: 1.125rem;
	}

	.disclaimer {
		font-size: 0.75rem;
		color: #6b7280;
		margin-top: 1rem;
		margin-bottom: 0;
	}

	/* Responsive design */
	@media (max-width: 640px) {
		.support-button {
			padding: 0.875rem 1.5rem;
		}

		.button-text {
			font-size: 1rem;
		}
	}
</style>
