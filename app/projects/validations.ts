import { z } from "zod"

export const CreateProject = z.object({
  foo: z.object({ name: z.string() }),
})
