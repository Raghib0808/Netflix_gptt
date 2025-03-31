import React from 'react'
import './Loader.css'
const Loader = () => {
  return (
    <div class="loader-container">
		<svg viewBox="0 0 400 160">
				<text x="50%" y="50%" dy=".32em" text-anchor="middle" class="text-body">
					Netflix_GPT
				</text>
				<text x="50%" y="50%" dx="" dy="2.1em" text-anchor="middle" class="text-body">
					.
				</text>
		</svg>
	</div>
  )
}

export default Loader