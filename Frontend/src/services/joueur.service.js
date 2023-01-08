import Axios from "axios"
export const header = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  
  export const addJoueur = async (joueur) => {
    const result = await Axios.post("http://localhost:8800/api/joueurs", joueur,header())
    return result.data
  }

  export const inviterJoueur = async (joueur) => {
    const result = await Axios.post("http://localhost:8800/api/joueurs/inviter", joueur,header())
    console.log(result.data)
    return result.data
  }

  export const updateJoueur = async (id, joueur) => {
    const result = await Axios.put(
      "http://localhost:8800/api/joueurs/" + id,
      joueur, header()
    )
    return result.data
    
  }

  export const fetchAllJoueurs = async () => {
    const result = await Axios.get(
        "http://localhost:8800/api/joueurs",header()
    );
    return result.data;
};


  export const fetchJoueurById = async (joueurId) => {
    const result = await Axios.get("http://localhost:8800/api/joueurs/" + joueurId,header()
    );
    console.log(result.data);
    return result.data;
};


