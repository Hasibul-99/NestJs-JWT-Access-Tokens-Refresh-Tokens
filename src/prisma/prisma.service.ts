import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({
            datasources: {
                db: {
                    url: 'postgresql://postgres:123@localhost:5431/nestjs?schema=public'
                }
            }
        });
    }

    async OnModuleInit() {
        await this.$connect();
    }

    async OnModuleDestroy() {
        await this.$disconnect()
    }
}
