import { IoIosSend } from 'react-icons/io'
import Btn from '../Btn/Btn'
import { Input, Label, TextArea } from './style'
import { toast } from 'sonner'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/axios'
import { isAxiosError } from 'axios'

const sendMessageSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  email: z.string().email('This is not a valid email'),
  message: z
    .string()
    .min(3, { message: 'Message must be at least 3 characters' }),
})

type SendMessageData = z.infer<typeof sendMessageSchema>

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(sendMessageSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function handleSendMessage({ email, name, message }: SendMessageData) {
    try {
      await api.post('/send-email', {
        name,
        email,
        message,
      })
      toast.success('Thank you for your message! I will get back to you soon.')
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error('Ops, An error occurred while trying to send the message')
      }
    }
  }

  return (
    <div className="w-full min-[769px]:w-1/2">
      <form onSubmit={handleSubmit(handleSendMessage)}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-2 w-full">
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
              <Label className="text-white">Your Name</Label>
              <Input
                type="text"
                placeholder="DIGIT YOUR NAME"
                className="poppins-light"
                {...register('name')}
              />
              {errors.name && (
                <span className="text-red-500 poppins-light">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
              <Label className="text-white">YOUR EMAIL</Label>
              <Input
                type="email"
                placeholder="DIGIT YOUR EMAIL"
                className="poppins-light"
                {...register('email')}
              />
              {errors.email && (
                <span className="text-red-500 poppins-light">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div>
            <Label className="text-white">YOUR MESSAGE</Label>
            <TextArea
              placeholder="DIGIT YOUR MESSAGE"
              className="poppins-light"
              {...register('message')}
            />
            {errors.message && (
              <span className="text-red-500 poppins-light">
                {errors.message.message}
              </span>
            )}
          </div>
          <div className="w-full sm:w-1/2">
            <Btn variant="default" type="submit" disabled={isSubmitting}>
              Send Message
              <IoIosSend className="icon-black text-black" />
            </Btn>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
