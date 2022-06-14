import {prisma} from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { from, to, value, itemtype} = req.body
    try{
        
        await prisma.item.create({
            data: {from: from, to: to, value: value, type: itemtype}
        })
        res.status(200).json({status:"item created successfully"})
        
    }catch (error){
        console.log(error)
    }

}