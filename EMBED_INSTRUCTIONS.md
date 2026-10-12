# 📋 How to Embed the Sunbird Pathways Web Portal in Google Sites

Yes, this source code can be embedded directly into **Google Sites**!

You have **two simple methods** to choose from:

---

## 🌟 Method 1: Direct HTML Embed (No External Hosting Required)

This is the fastest method. It embeds the entire web portal directly into Google Sites using the self-contained embed file created for you: [`google-sites-embed.html`](file:///c:/Users/Banty%20Kh/Downloads/Career%20handbook/google-sites-embed.html).

### Steps:
1. Open [`google-sites-embed.html`](file:///c:/Users/Banty%20Kh/Downloads/Career%20handbook/google-sites-embed.html) in your text editor (VS Code, Notepad, etc.).
2. Copy the entire file content (**Ctrl + A**, then **Ctrl + C**).
3. Open your Google Site editor at [sites.google.com](https://sites.google.com).
4. In the right-hand panel, go to **Insert** > **Embed** (`<>`).
5. In the pop-up window, click the **Embed code** tab.
6. Paste (**Ctrl + V**) the copied code and click **Next**.
7. Preview the portal, then click **Insert**.
8. **Adjust the dimensions**:
   - Click the embedded box on the page.
   - Drag the left and right blue dots to make it full width.
   - Drag the bottom blue dot downward to expand its vertical viewport height so users have plenty of reading space.
9. Click **Publish** on your Google Site!

> **Why `google-sites-embed.html`?**  
> Google Sites sandbox frames do not have access to local file paths like `sunbird-logo.png`. In `google-sites-embed.html`, the Sunbird logo has been converted into an inline Base64 image, and outbound links are configured with `<base target="_blank">` so exams and university links open in a new tab smoothly without iframe sandbox errors.

---

## 🚀 Method 2: Embed by URL via GitHub Pages (Recommended for Seamless Scaling)

If you prefer full-bleed responsive rendering without scrolling restrictions:

### Steps:
1. Push this repository to GitHub and enable **GitHub Pages** (Settings > Pages > Deploy from `main` branch).
2. Copy your live website URL (e.g., `https://<YOUR-USERNAME>.github.io/career-handbook/`).
3. In Google Sites editor, click **Insert** > **Embed**.
4. In the pop-up window, select the **By URL** tab.
5. Paste your live GitHub Pages URL.
6. Choose **Whole page** and click **Insert**.
7. Drag the border handles to make it full width across your Google Site layout.
8. Click **Publish**!

---

## 💡 Summary of Files

| File | Purpose |
|---|---|
| [`google-sites-embed.html`](file:///c:/Users/Banty%20Kh/Downloads/Career%20handbook/google-sites-embed.html) | **Self-contained HTML file** with inline Base64 logo and new-window links, ready to copy-paste into Google Sites **Embed Code**. |
| [`index.html`](file:///c:/Users/Banty%20Kh/Downloads/Career%20handbook/index.html) | Primary website portal file for standard hosting (GitHub Pages, custom domain, Vercel). |
| [`EMBED_INSTRUCTIONS.md`](file:///c:/Users/Banty%20Kh/Downloads/Career%20handbook/EMBED_INSTRUCTIONS.md) | Step-by-step instructions for embedding in Google Sites. |
