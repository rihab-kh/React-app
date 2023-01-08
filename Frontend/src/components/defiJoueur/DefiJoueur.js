import "./DefiJoueur.css"
import { Radio } from "antd"
import React from "react"


export default function Defi({ id, objectif, lienVideo, periode }) {
	const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

	return (
		<div className="defi">
			<>
				<div className="">
					{objectif} {lienVideo} {periode}
				</div>
				{}
				
					<label>
					<Radio.Group onChange={onChange} value={value}>
      					<Radio>Done</Radio>
      
   					</Radio.Group>
					</label>
				
			</>
		</div>
	)
}
