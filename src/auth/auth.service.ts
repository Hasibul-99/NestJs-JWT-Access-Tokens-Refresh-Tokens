import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {

    }

    signuplocal(dto: AuthDto) {
        this.prisma.user.findUnique({
            where: {}
        })
    }
    signinlocal() { }
    logout() { }
    refreshTokens() { }
}
