import { useState } from "react"
import "./ProgrammeSeance.css"
export default function ProgrammeSeance({
	title,
	descriptionTechnique,
	image,
	lienVideo,
	createdBy,
	id,

	updateProgrammeSeance,
	deleteProgrammeSeance,
}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [titleToUpdate, setTitleToUpdate] = useState(title)
	const [descriptionTechniqueToUpdate, setDescriptionTechniqueToUpdate] =
		useState(descriptionTechnique)
	const [imageToUpdate, setImageToUpdate] = useState(image)
	const [lienVideoToUpdate, setLienVideoToUpdate] = useState(lienVideo)

	const [createdByToUpdate, setCreatedByToUpdate] = useState(createdBy)
	// function arrayBufferToBase64(buffer) {
	// 	var binary = ""
	// 	var bytes = [].slice.call(new Uint8Array(buffer))
	// 	bytes.forEach((b) => (binary += String.fromCharCode(b)))
	// 	return window.btoa(binary)
	// }

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => deleteProgrammeSeance(id)}>Delete</button>
				<button onClick={() => setUpdateMode(true)}>Update</button>
			</div>
		)
	}
	return (
		<div className="task">
			{!updateMode ? (
				<>
					<div className="">
						<b>{title}</b>
					</div>
					<div className="">{descriptionTechnique}</div>

					<div className="">
						<a href={lienVideo}>Cliquer ici</a>
					</div>
					<div className="">
						<img src={image} width={70} height={70} />
					</div>
					<br />
					{renderActions()}

					<br />
					<br />
				</>
			) : (
				<div>
					<input
						type="text"
						value={titleToUpdate}
						onChange={(e) => setTitleToUpdate(e.target.value)}
					/>
					<br />
					<input
						type="text"
						value={descriptionTechniqueToUpdate}
						onChange={(e) => setDescriptionTechniqueToUpdate(e.target.value)}
					/>
					<br />
					<input
						type="file"
						// onChange={(event) => {
						// 	const [file] = event.target.files
						// 	setImageToUpdate(URL.createObjectURL(file))
						// }}

						// onChange={(e) => {
						// 	var base64Flag = "data:image/jpeg;base64,"
						// 	const [file] = arrayBufferToBase64(e.target.files)
						// 	setImageToUpdate(base64Flag + file)
						// }}

						onChange={(event) => {
							var reader = new FileReader()
							const [file] = event.target.files
							reader.readAsDataURL(file)

							reader.onloadend = function () {
								var base64data = reader.result

								setImageToUpdate(base64data)
							}
						}}
					/>
					<img src={image} width={50} height={50} />

					<br />
					<input
						type="text"
						value={lienVideoToUpdate}
						onChange={(e) => setLienVideoToUpdate(e.target.value)}
					/>
					<br />
					<button
						onClick={() => {
							updateProgrammeSeance(
								id,
								titleToUpdate,
								descriptionTechniqueToUpdate,
								imageToUpdate,
								lienVideoToUpdate
							)
							setUpdateMode(false)
						}}
					>
						update ProgrammeSeance
					</button>
				</div>
			)}
		</div>
	)
}
