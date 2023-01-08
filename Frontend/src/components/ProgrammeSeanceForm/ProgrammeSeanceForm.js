import { useState } from "react"
import "./ProgrammeSeanceform.css"

export default function ProgrammeSeanceForm(props) {
	const addProgrammeSeance = "Add a ProgrammeSeance"

	const [title, setTitle] = useState("")
	const [descriptionTechnique, setDescriptionTechnique] = useState("")
	const [image, setImage] = useState()
	const [lienVideo, setLienVideo] = useState("")

	function handleAddProgrammeSeance() {
		props.addProgrammeSeance(title, descriptionTechnique, image, lienVideo)
		//console.log(image)
	}

	// function arrayBufferToBase64(buffer) {
	// 	var binary = ""
	// 	var bytes = [].slice.call(new Uint8Array(buffer))
	// 	bytes.forEach((b) => (binary += String.fromCharCode(b)))
	// 	return window.btoa(binary)
	// }

	return (
		<>
			<form action="" className="form">
				<>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<input
						type="text"
						name="descriptionTechnique"
						placeholder="Description Technique"
						value={descriptionTechnique}
						onChange={(e) => setDescriptionTechnique(e.target.value)}
					/>

					<input
						type="text"
						name="lienVideo"
						placeholder="Lien Video"
						value={lienVideo}
						onChange={(e) => setLienVideo(e.target.value)}
					/>
				</>
				<input
					type="file"
					name="image"
					onChange={(event) => {
						var reader = new FileReader()
						const [file] = event.target.files
						reader.readAsDataURL(file)

						reader.onloadend = function () {
							var base64data = reader.result

							setImage(base64data)
						}
					}}

					// onChange={(event) => {
					// 	const [file] = event.target.files
					// 	setImage(URL.createObjectURL(file))
					// }}

					// onChange={(e) => {
					// 	var base64Flag = "data:image/jpeg;base64,"
					// 	const [file] = arrayBufferToBase64(e.target.files)
					// 	setImage(base64Flag + file)
					// }}
				/>

				<img src={image} alt="img" width={50} height={50} />
				<button type="button" onClick={handleAddProgrammeSeance}>
					{addProgrammeSeance}
				</button>
			</form>
		</>
	)
}
