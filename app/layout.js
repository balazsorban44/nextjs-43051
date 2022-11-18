export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <main className="main">{children}</main>
      </body>
    </html>
  )
}
