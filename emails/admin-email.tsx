import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

interface AdminEmailProps {
	name: string;
	email: string;
	message: string;
}

export default function AdminEmail({ name, email, message }: AdminEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New Contact Form Submission</Preview>
			<Tailwind
				config={{
					theme: {
						extend: {
							colors: {
								brand: "#2250f4",
								offwhite: "#fafbfb",
							},
							spacing: {
								0: "0px",
								20: "20px",
								45: "45px",
							},
						},
					},
				}}
			>
				<Body className="bg-offwhite text-base font-sans">
					<Img
						src="https://res.cloudinary.com/duwaccahn/image/upload/v1738235456/my-profile-p_k6ckh1.png"
						width="60"
						height="60"
						alt="Talles Amaral | Profile"
						className="mx-auto my-20"
					/>
					<Container className="bg-white p-45">
						<Heading className="text-center my-0 leading-8">
							📩 New Contact Form Submission
						</Heading>

						<Section>
							<Row>
								<Text className="text-base">
									<strong>Name:</strong> {name}
								</Text>
								<Text className="text-base">
									<strong>Email:</strong> {email}
								</Text>
								<Text className="text-base">
									<strong>Message:</strong>
									<br />
									{message}
								</Text>
							</Row>
						</Section>
					</Container>

					<Container className="mt-20">
						<Text className="text-center text-gray-400 mb-45">
							© 2024 | Designed & Developed by{" "}
							<Link href="https://tallesamaral.dev">Talles Amaral</Link>
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
