import { draftMode } from 'next/headers'

import './globals.css'
import { fontSans } from '@/app/fonts'
import LiveVisualEditing from '@/components/LiveVisualEditing'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>
				{children}
				{draftMode().isEnabled && <LiveVisualEditing />}
			</body>
		</html>
	)
}
