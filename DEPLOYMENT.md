# Publish the NOVA Elite Panels Website

This guide explains how to open the project in **Visual Studio Code**, publish the source to **GitHub**, deploy it with the included **GitHub Pages workflow**, and connect `novaelitepanels.com`. GitHub recommends a custom Actions workflow when a site requires its own build process, which applies to this Vite project.[1]

| Requirement | Recommended version or access |
|---|---|
| Visual Studio Code | Current stable release |
| Node.js | Version 22 LTS |
| Package manager | pnpm 10 through Corepack |
| Git | Current stable release |
| GitHub access | Permission to create and configure a repository |
| Domain access | Permission to edit DNS for `novaelitepanels.com` |

## 1. Open and Test the Website in VS Code

Extract the ZIP file. In VS Code, choose **File → Open Folder** and select the extracted `nova-elite-panels-website` folder. Open **Terminal → New Terminal**, then run:

```bash
corepack enable
pnpm install
pnpm dev
```

The terminal will display a local address, normally `http://localhost:3000`. Open it in a browser and confirm the product galleries, contact links, and request form appear correctly. Stop the local server with `Ctrl+C` when finished.

| Command | Purpose |
|---|---|
| `pnpm dev` | Runs the editable local website |
| `pnpm check` | Checks TypeScript for errors |
| `pnpm build` | Creates the production website in `dist/public` |
| `pnpm preview` | Previews the production build locally |

## 2. Create the GitHub Repository

Create a new empty repository on GitHub. A clear repository name is `nova-elite-panels-website`. Do **not** add another README, `.gitignore`, or license because these files are already included.

In the VS Code terminal, run the commands below. Replace `YOUR-GITHUB-USERNAME` with your account or organization name:

```bash
git init
git add .
git commit -m "Launch NOVA Elite Panels website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/nova-elite-panels-website.git
git push -u origin main
```

| If Git asks for authentication | Recommended action |
|---|---|
| Browser sign-in appears | Complete the GitHub sign-in flow |
| Password is rejected | Use GitHub authentication or a personal access token rather than an account password |
| Repository already has files | Pull or recreate it as an empty repository before pushing |

## 3. Turn On GitHub Pages

Open the repository on GitHub, then select **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**. The included `.github/workflows/deploy-pages.yml` file builds the site and publishes `dist/public` whenever you push to `main`.[1]

| Where to monitor the deployment | What success looks like |
|---|---|
| Repository → **Actions** | The “Deploy NOVA website to GitHub Pages” workflow has a green check |
| Repository → **Settings → Pages** | GitHub displays the published site address |
| Default project URL | `https://YOUR-GITHUB-USERNAME.github.io/nova-elite-panels-website/` |

If the first deployment does not begin automatically, open **Actions**, select the Pages workflow, and choose **Run workflow**.

## 4. Connect the NOVA Domain

In **Repository → Settings → Pages**, enter the preferred custom domain. Using `www.novaelitepanels.com` is practical because GitHub can redirect between the `www` and apex variants when both DNS configurations are present.[2]

At your domain registrar or DNS provider, add the records below. Replace `YOUR-GITHUB-USERNAME` with the GitHub account or organization that owns the repository. GitHub instructs that the `www` CNAME point directly to `YOUR-GITHUB-USERNAME.github.io` without the repository name.[2]

| Type | Host/name | Value |
|---|---|---|
| `CNAME` | `www` | `YOUR-GITHUB-USERNAME.github.io` |
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |

Remove conflicting default parking records for `@` or `www`. GitHub notes that DNS changes can take up to 24 hours to propagate.[2]

## 5. Enable HTTPS

After GitHub verifies the custom domain and issues its certificate, return to **Settings → Pages** and enable **Enforce HTTPS**. GitHub Pages supports HTTPS for correctly configured custom domains, although certificate provisioning may take time after a DNS change.[3]

| Final check | Expected result |
|---|---|
| `https://www.novaelitepanels.com` | Website loads securely |
| `https://novaelitepanels.com` | Redirects to the selected primary domain |
| Browser address bar | Padlock or secure-connection indicator appears |
| Product images | All local images load without broken links |

## 6. Publish Future Changes

Edit the site in VS Code, check it locally, and push the update. Each push to `main` triggers the included GitHub Pages workflow automatically.[1]

```bash
pnpm check
pnpm build
git add .
git commit -m "Update website content"
git push
```

> **Important:** The contact-request form opens a prefilled email in the visitor’s email application. To submit silently in the background, connect a dedicated form service or email backend before publishing sensitive customer information.

## References

[1]: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site "GitHub Docs — Configuring a publishing source for your GitHub Pages site"

[2]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site "GitHub Docs — Managing a custom domain for your GitHub Pages site"

[3]: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https "GitHub Docs — Securing your GitHub Pages site with HTTPS"
