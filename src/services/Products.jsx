class ProductService{

    static productList = [
        {
          id: "1",
          image:
            "https://assets.vogue.com/photos/61b8faa2509a36e633df7b63/1:1/w_2667,h_2667,c_limit/slide_4.jpg",
          name: "Vogue",
          price: 1500,
          qty: 0
        },
        {
          id: "2",
          image:
            "https://www.collinsdictionary.com/images/full/tshirt_204029461_1000.jpg",
          name: "Cobuild",
          price: 1200,
          qty: 0
        },
        {
          id: "3",
          image:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJh9vuMSJpWxRmfzZ8ZQBWME-qjkMw78nqdUf3uD0Ug0IgRt3c6pSNJL3wg0HYrUdnfuht_tVVfkyvwzfKbZE4Nyq2zPGcQ-qOPAvkwz8LIOqOjsAZksp93g",
          name: "Freepik",
          price: 1800,
          qty: 0
        },
        {
          id: "4",
          image: "https://www.oxfordshiremind.org.uk/app/uploads/2019/08/tshirt.png",
          name: "Oxfordshire",
          price: 1700,
          qty: 0
        },
        {
          id: "5",
          image:
            "https://hk.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lvse-inside-out-t-shirt-ready-to-wear--HIY47WJYN513_PM2_Front%20view.jpg",
          name: "Men Addidas",
          price: 1900,
          qty: 0
        },
      ];

    static getProductList(){
        return this.productList;
    }
}

export default ProductService;