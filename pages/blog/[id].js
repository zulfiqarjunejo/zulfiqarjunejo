import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "../../components/layout/layout";

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>It’s Latin — Sorta</h1>
      <p>24.10.1993</p>
      <p>R1</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies
        mi eget mauris pharetra et. Eget nulla facilisi etiam dignissim diam
        quis. Nibh tellus molestie nunc non blandit massa. Ut faucibus pulvinar
        elementum integer enim neque. Sagittis eu volutpat odio facilisis mauris
        sit amet massa. Diam quis enim lobortis scelerisque fermentum dui
        faucibus in. Duis ultricies lacus sed turpis tincidunt id aliquet.
        Elementum eu facilisis sed odio morbi quis commodo odio aenean. Urna nec
        tincidunt praesent semper feugiat.
        <Image
          src={"/images/inside_blog_post.jpeg"}
          width={400}
          height={400}
        ></Image>
        Luctus venenatis lectus magna fringilla urna porttitor. Vitae proin
        sagittis nisl rhoncus mattis rhoncus urna. Tristique magna sit amet
        purus gravida quis blandit turpis cursus. Vestibulum mattis ullamcorper
        velit sed ullamcorper morbi. Vel risus commodo viverra maecenas accumsan
        lacus vel facilisis. At augue eget arcu dictum varius duis at. Pulvinar
        neque laoreet suspendisse interdum consectetur libero id. Vulputate eu
        scelerisque felis imperdiet proin fermentum leo. Malesuada fames ac
        turpis egestas integer eget. Facilisi nullam vehicula ipsum a. Dui
        faucibus in ornare quam viverra orci sagittis eu. Lorem ipsum dolor sit
        amet consectetur adipiscing elit duis tristique. Massa vitae tortor
        condimentum lacinia quis vel. Odio facilisis mauris sit amet. Cursus
        risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.
        Bibendum neque egestas congue quisque egestas diam. Porttitor eget dolor
        morbi non arcu risus. Nisl rhoncus mattis rhoncus urna neque viverra.
        Elementum eu facilisis sed odio morbi. Aliquam vestibulum morbi blandit
        cursus risus at ultrices. Sem et tortor consequat id porta. Malesuada
        proin libero nunc consequat interdum varius sit. Nunc vel risus commodo
        viverra maecenas accumsan. Cursus turpis massa tincidunt dui ut ornare
        lectus sit. Aenean sed adipiscing diam donec adipiscing. Mattis enim ut
        tellus elementum sagittis vitae. Dictum varius duis at consectetur lorem
        donec massa. Amet cursus sit amet dictum sit amet justo. Lacus sed
        viverra tellus in hac habitasse. Ornare lectus sit amet est placerat.
        Vitae turpis massa sed elementum tempus egestas sed sed risus. Eleifend
        mi in nulla posuere sollicitudin aliquam. Porttitor leo a diam
        sollicitudin. Sed euismod nisi porta lorem mollis aliquam. Nibh tortor
        id aliquet lectus proin nibh nisl. Ut diam quam nulla porttitor massa.
        Arcu risus quis varius quam quisque id. Quam pellentesque nec nam
        aliquam sem et tortor consequat. Sit amet nisl suscipit adipiscing
        bibendum est ultricies integer. Accumsan in nisl nisi scelerisque eu
        ultrices vitae auctor eu. Magna etiam tempor orci eu lobortis elementum
        nibh tellus. Phasellus faucibus scelerisque eleifend donec pretium
        vulputate sapien nec sagittis. Mi eget mauris pharetra et ultrices.
        Felis bibendum ut tristique et egestas quis ipsum suspendisse.
        Pellentesque dignissim enim sit amet venenatis. In hac habitasse platea
        dictumst vestibulum rhoncus est pellentesque. Tortor consequat id porta
        nibh venenatis. Tortor condimentum lacinia quis vel eros donec ac odio.
        Congue quisque egestas diam in arcu cursus. Consequat nisl vel pretium
        lectus. Nisl pretium fusce id velit. Feugiat pretium nibh ipsum
        consequat nisl vel. Eget velit aliquet sagittis id. Dictumst quisque
        sagittis purus sit amet volutpat consequat. In massa tempor nec feugiat
        nisl. Elementum integer enim neque volutpat ac tincidunt vitae semper.
      </p>
      <Image
        src={"/images/outside_blog_post.jpeg"}
        width={400}
        height={400}
      ></Image>
    </Layout>
  );
};

export default Blog;
