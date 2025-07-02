<script>
    let { main_message='main text',
        highlight='important',
        button_link='https://example.com',
        button_text='button',
        sub_message='sub text'
    } = $props()

</script>

<div class="info-container">
    <p class="main-text">{main_message}<span class='highlight-text'>{highlight}</span></p>
    <a
        href={button_link}
        target="_blank"
        rel="noopener noreferrer"
        class="info-button">
		<div class="button-content">
			<span class="button-text">{button_text}</span>
		</div>
    </a>
    <p class="sub-text">{sub_message}</p>
</div>

<style>
    /* make width dynamic to content langth either dont include the attr or make it responsive */
    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25%;
        border-radius: 20px;
        border-top: 3px solid #494efd;;
        box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .main-text {
        color: #1d1d1d;
        text-align: center;
    }

    .highlight-text {
        color: #494efd;
    }

    .info-button {
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

	.info-button:hover {
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

    .sub-text {
        color: grey;
    }

    @media (max-width: 962px) {
        .info-container {
            width: 50%;
        }
	}
</style>