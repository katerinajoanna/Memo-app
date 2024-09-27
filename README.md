#  API Dokumentation - **M e m o - a p p** 
 
###*Memo-appen* är en enkel anslagstavla som låter användare lägga upp och se meddelanden. Användare kan *lägga till* nya meddelanden genom att ange sitt användarnamn. Applikationen består av en frontend inbyggd i React och en backend i form av ett serverlöst API som körs i AWS. Gränssnittet är värd i en S3-bucket på AWS, och all interaktion med API:t utförs via HTTP-förfrågningar.

---

## Endpoint för att lägga till meddelanden
 **URL:**  https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/message
 method: POST
 ```json
{
  "username": "name",
  "text": "text message"
}
```
return: 
{
	"message": "Message added successfully"
}

 ---

 ## Endpoint att se alla meddelande
  **URL:**    https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/messages
  method: GET
  return:
  [
	{
		"date": "2024-09-25T10:00:00Z",
		"message": "Bay bay ",
		"username": "hans",
		"id": "zkIvn2Q3"
	},
	{
		"date": "2024-09-25T10:00:00Z",
		"message": "Hello! ",
		"username": "karoline",
		"id": "aKGlOFkp"
	}
]

---

## Endpoint att ta bort meddelande
 **URL:**    https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/message/{id}
method: DELETE
return: 
{
  "success": true,
  "message": "Message deleted successfully"
}

eller
{
  "success": false,
  "message": "Message not found"
}

---

## Endpoint att uppdatera meddelande
**URL**  https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/message/{id}
method: PUT

```json
{
  "text": "Ny meddelande"
}

return:
{
  "success": true,
  "message": "Message updated successfully"
}

eller
{
  "success": false,
  "message": "Message not found"
}

eller
{
  "success": false,
  "message": "Invalid input: text is required"
}
