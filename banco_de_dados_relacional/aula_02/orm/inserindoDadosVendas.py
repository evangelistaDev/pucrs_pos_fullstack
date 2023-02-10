import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import vendas as vd

endereco = "C:\\Desenvolvimento\\pucrs_pos_fullstack\\banco_de_dados_relacional\\aula_02\\orm\\Dados\\Vendas\\"

vendedor = pd.read_csv(endereco + "vendedor.csv", sep=";")

tbVendedor = pd.DataFrame(vendedor)

engine = sa.create_engine("sqlite:///BD/vendas.db")

sessao = orm.sessionmaker(bind=engine)
sessao = sessao()

#tbVendedor

for i in range(len(tbVendedor)):
    dados_vendedor = vd.vendedor(
        registro_vendedor = int(tbVendedor["registro_vendedor"][i]),
        cpf = tbVendedor["cpf"][i],
        nome = tbVendedor["nome"][i],
        genero = tbVendedor["genero"][i],
        email = tbVendedor["email"][i]  
    )
    try:
        sessao.add(dados_vendedor)
        sessao.commit()
    except ValueError:
        ValueError()

print("Dados inseridos na tbVendedor")

#tbProduto
produto = pd.read_excel(endereco + "produto.xlsx")
tbProduto = pd.DataFrame(produto)

conn = engine.connect()
metadata = sa.schema.MetaData.__init__(bind=engine)

DadosProduto = tbProduto.to_dict(orient="records")

tabela_produto = sa.Table(vd.produto.__tablename__, metadata)

try:
    conn.execute(tabela_produto.insert(), DadosProduto)
    sessao.commit()
except ValueError:
    ValueError()

print("Dados inseridos na tabela Produtos")
sessao.close_all()