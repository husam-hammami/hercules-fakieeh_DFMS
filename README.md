# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/034c6c33-55f4-445b-b90e-8a700950bd87

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/034c6c33-55f4-445b-b90e-8a700950bd87) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/034c6c33-55f4-445b-b90e-8a700950bd87) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Backend development

A minimal API is provided using **Flask**. To run the backend locally:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

The API is currently in-memory only. Database integration will be added later.

### Available API routes

All routes are prefixed with `/api`:

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET    | `/materials`        | List all materials |
| POST   | `/materials`        | Create a new material |
| GET    | `/orders`           | List all orders |
| POST   | `/orders`           | Create an order |
| GET    | `/inventory`        | List inventory items |
| POST   | `/inventory`        | Create an inventory item |
| GET    | `/rfid-tags`        | List RFID tags |
| POST   | `/rfid-tags`        | Register new RFID tag |
| GET    | `/trucks`           | List trucks |
| POST   | `/trucks`           | Register a truck |
| PUT    | `/trucks/<id>/status` | Update truck status |
| GET    | `/alarms`           | List alarms |
| POST   | `/alarms`           | Create an alarm |
| PUT    | `/alarms/<id>/status` | Update alarm status |
| GET    | `/storage-bins`     | List storage bins |
| POST   | `/storage-bins`     | Create a storage bin |
| PUT    | `/storage-bins/<id>` | Update a storage bin |
| GET    | `/bulk-transfers`   | List bulk transfers |
| POST   | `/bulk-transfers`   | Create a bulk transfer |
| PUT    | `/bulk-transfers/<id>/status` | Update transfer status |
| GET    | `/recipes`          | List production recipes |
| POST   | `/recipes`          | Create a recipe |
| PUT    | `/recipes/<id>/status` | Update recipe status |

