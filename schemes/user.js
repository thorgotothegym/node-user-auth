import z from 'zod'

const userSchema = z.object({
  name: z.string().min(5).max(25),
  surname: z.string().min(5).max(49),
  username: z.string().min(5).max(25),
  password: z.string().min(10).max(25),
  confirmPassword: z.string().min(10).max(25)
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'] // path of error
})

export const validateUser = (input) => {
  return userSchema.safeParse(input)
}
