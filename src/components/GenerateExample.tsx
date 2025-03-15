import { fetchFakeData } from "../api/fakeData"

interface GenerateColumnExampleProps{
    selectedField: string
    name: string
}

export async function GenerateExample({selectedField, name}: GenerateColumnExampleProps){
    const apiResult = await fetchFakeData(`&${name}=${selectedField}`)
    console.log(apiResult)
    return(
        <div className="type">{"FOI"}</div>
    )
}