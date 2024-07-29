import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';

const signUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
});
type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
    const { register, handleSubmit, formState } = useForm<SignUpForm>();
    const { isSubmitting } = formState;
    const navegate = useNavigate();

    const handleSignIn = async (data: SignUpForm) => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success('Restauramte cadastrado com sucesso!.', {
            action: {
                label: 'login',
                onClick: () => navegate('/sign-in'),
            },
        });
    };

    return (
        <div className="p-8">
            <Button variant={'link'} asChild className="absolute right-8 top-8">
                <Link to="/sign-in" className="">
                    Fazer login
                </Link>
            </Button>
            <div className="flex w-[350px] flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tighter">
                        Criar conta grátis
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Seja um parceito e comece suas vendas
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit((data: any) => handleSignIn(data))}
                    className="space-y-4"
                >
                    <div className="space-y-2">
                        <Label htmlFor="restaurantName">
                            Nome do estabelecimento
                        </Label>
                        <Input
                            id="restaurantName"
                            type="text"
                            {...register('restaurantName')}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="managerName">Seu nome</Label>
                        <Input
                            id="managerName"
                            type="text"
                            {...register('managerName')}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                            id="phone"
                            type="tel"
                            {...register('phone')}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Seu e-mail</Label>
                        <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            required
                        />
                    </div>

                    <Button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full"
                    >
                        Finalizar cadastro
                    </Button>

                    <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                        Ao continuar, você concorda com nossos
                        <a href="" className="underline underline-offset-4">
                            {'    '}
                            termos de serviço
                        </a>{' '}
                        e
                        <a href="" className="underline underline-offset-4">
                            {' '}
                            políticas de privacidade
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
