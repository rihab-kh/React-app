import Axios from "axios"
export const header = () => ({
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
})

export const PayerAbonnement = async (typeAbonnement) => {
	const result = await Axios.put(
		"http://localhost:8800/api/payer/",
		typeAbonnement,
		header()
	)

	return result.data
}
