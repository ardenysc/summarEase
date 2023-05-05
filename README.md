# SummarEase

### Description
SummarEase summarizes and extracts keywords from websites of your choice using ChatGPT API. 

I worked as a full stack developer to create the dashboard page where you can view and edit your collection.

### Demo
https://user-images.githubusercontent.com/99078453/235422448-fac9410b-e72b-4dcc-8741-78b3d851d48e.mp4

### Usage
To summarize any website, simply click on the "Add Summary" button of SummarEase extension. The summarized content along with relevant keywords will be added to your dashboard, where you can edit your collection as needed. Although the extension is fully functional, we were unable to deploy it to the store as ChatGPT APIs are paid services.

### Installation
1. Clone this repository.
2. In the <code>server</code> folder, create a <code>.env</code> file and input the information below.
```
DB_USERNAME=your_user_name
DB_PASSWORD=your_password
OPENAI_API_KEY=your_api_key
```
3. Go to chrome://extensions/
4. Click on "Load unpacked", and select the <code>extension</code> folder.
5. Go to any website and add to your dashboard.
