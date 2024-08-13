import bcrypt from 'bcrypt';

export const registerUser = async (body) => {
  try {
    const { password } = body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      ...body,
      password: hashPassword,
    });
    return newUser;
  } catch (error) {
    if (error?.parent?.code === '23505') {
      error.message = 'Email in use';
    }
    throw error;
  }
};
