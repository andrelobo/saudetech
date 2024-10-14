import Image from "next/image";
import { redirect } from "next/navigation";
import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

// Define props type for the component
interface SearchParamProps {
  params: {
    userId: string;
  };
}

// Register component to handle patient registration
const Register = async ({ params: { userId } }: SearchParamProps) => {
  try {
    const user = await getUser(userId);
    if (!user) {
      console.error(`User with ID ${userId} not found.`);
      return <p>User not found. Please try again later.</p>; // Ou redirecione para uma página de erro
    }

    const patient = await getPatient(userId);

    // Redirect to new appointment page if patient already exists
    if (patient) redirect(`/patients/${userId}/new-appointment`);

    return (
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient logo"
              className="mb-12 h-10 w-fit"
            />

            <RegisterForm user={user} />

            <p className="copyright py-12">© 2024 CarePluse</p>
          </div>
        </section>

        <Image
          src="/assets/images/register-img.png"
          height={1000}
          width={1000}
          alt="registration illustration"
          className="side-img max-w-[390px]"
        />
      </div>
    );
  } catch (error) {
    console.error("An error occurred during the registration process:", error);
    return <p>An error occurred. Please try again later.</p>; // Renderizar uma mensagem de erro
  }
};

export default Register;
