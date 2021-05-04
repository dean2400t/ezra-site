import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export async function getStaticProps() {
    const scholarships = await prisma.scholarship.findMany();
    return {
      props: {scholarships},
      revalidate: 60
    }
  }

function WorkShops({scholarships}) {
    return (
        <ul>
            {scholarships.map((scholarship) => (
                <li>
                    <br/><br/>
                    {scholarship.title} <br/>
                    {scholarship.amount} <br/>
                    {scholarship.content}
                </li>
            ))}
        </ul>
    )
}

export default WorkShops;